import sys
import re
import subprocess
import os

def verify(path):
    print(f"Verifying {path}...")
    with open(path, 'r') as f:
        content = f.read()
    
    # Split frontmatter and code
    # Assuming frontmatter is between first two --- lines
    parts = re.split(r'^---$', content, maxsplit=2, flags=re.MULTILINE)
    
    if len(parts) < 3:
        print(f"Invalid format in {path}: Could not split frontmatter")
        return False
    
    front = parts[1]
    code = parts[2]
    
    # Remove leading newline from code if present (artifact of split)
    if code.startswith('\n'):
        code = code[1:]

    # Extract signature block
    # The signature is likely a block scalar in YAML
    match = re.search(r'signature: (.*)', front, re.DOTALL)
    if not match:
        print(f"No signature found in {path}")
        return False
    
    sig_raw = match.group(1).strip()
    
    # Clean up the signature
    # If it's indented, we might need to dedent, but usually strip() helps if it's just one block
    # However, YAML block scalars often have indentation. 
    # Let's try to construct a valid PGP block.
    
    sig_lines = sig_raw.splitlines()
    cleaned_lines = [line.strip() for line in sig_lines]
    sig_body = '\n'.join(cleaned_lines)
    
    # Check if headers are present. If not, we might need to add them or fix them.
    # The previous output showed END header but missing BEGIN header.
    # Let's ensure it has both.
    
    if '-----BEGIN PGP SIGNATURE-----' not in sig_body:
        sig_body = '-----BEGIN PGP SIGNATURE-----\n\n' + sig_body
        
    if '-----END PGP SIGNATURE-----' not in sig_body:
        sig_body = sig_body + '\n-----END PGP SIGNATURE-----'
        
    # Write sig to temp file
    sig_path = 'temp.sig'
    with open(sig_path, 'w') as f:
        f.write(sig_body)
        
    # Run GPG
    # gpg --verify SIGFILE DATAFILE
    # We pass code via stdin
    
    try:
        proc = subprocess.run(
            ['gpg', '--verify', sig_path, '-'], 
            input=code.encode('utf-8'), 
            capture_output=True
        )
        
        if proc.returncode != 0:
            print(f"Failed {path}: {proc.stderr.decode()}")
            return False
        else:
            print(f"Verified {path} successfully.")
            return True
            
    except Exception as e:
        print(f"Error running gpg: {e}")
        return False
    finally:
        if os.path.exists(sig_path):
            os.remove(sig_path)

if __name__ == '__main__':
    import glob
    # Check if arguments are provided, otherwise check all sources
    if len(sys.argv) > 1:
        files = sys.argv[1:]
    else:
        files = glob.glob('sources/**/*.js', recursive=True)
    
    failed = False
    for f in files:
        if not verify(f): 
            failed = True
            
    if failed: 
        sys.exit(1)
