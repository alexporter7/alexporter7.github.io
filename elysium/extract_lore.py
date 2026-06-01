import zipfile
import xml.etree.ElementTree as ET
import os
import re

def clean_text(text):
    """Clean up common issues from docx extraction"""
    # Replace common mangled characters
    replacements = {
        '\uf0b7': '•',  # bullet
        '\u2019': "'",  # right single quote
        '\u2018': "'",  # left single quote
        '\u201c': '"',  # left double quote
        '\u201d': '"',  # right double quote
        '\u2013': '-',  # en dash
        '\u2014': '--', # em dash
    }
    for old, new in replacements.items():
        text = text.replace(old, new)
    return text

def extract_docx_text(docx_path):
    try:
        with zipfile.ZipFile(docx_path, 'r') as z:
            with z.open('word/document.xml') as f:
                tree = ET.parse(f)
                root = tree.getroot()
                
                ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
                
                paragraphs = []
                for para in root.findall('.//w:p', ns):
                    texts = para.findall('.//w:t', ns)
                    para_text = ''.join(t.text or '' for t in texts)
                    if para_text.strip():
                        paragraphs.append(clean_text(para_text.strip()))
                
                return '\n\n'.join(paragraphs)
    except Exception as e:
        return f"ERROR extracting {os.path.basename(docx_path)}: {str(e)}"

# List of files to extract (in order of importance)
files = [
    ("[01] [High Mayor_s Office] Formal Establishment of Elysium Government.docx", "01_Establishment_of_Government.md"),
    ("[02] [High Mayor_s Office] Formal Ratification of Elysium Constitution.docx", "02_Ratification_of_Constitution.md"),
    ("[03] [Council of Elysium] Spawn Island_s Council Chambers Begins Construction.docx", "03_Spawn_Island_Council_Chambers.md"),
    ("[04] [Council of Elysium] District Wall Construction Started Press Release.docx", "04_District_Wall_Construction.md"),
    ("[05] [Office of Construction] District Boundary Construction Ahead of Pace.docx", "05_District_Boundary_Progress.md"),
    ("[06] [HighMayorOffice] Elysium Announces New Online Automated Building Permit Form.docx", "06_Building_Permit_Form.md"),
    ("[07] [Department of Construction] Tideward District Landscaping Project Underway.docx", "07_Tideward_Landscaping.md"),
    ("[08] [Aurelian District] Aurelian Announces Goverment Investment for Residential Housing.docx", "08_Aurelian_Housing_Investment.md"),
    ("[09] [Department of Economic Development] City of Elysium Welcomes Immigrants.docx", "09_Elysium_Welcomes_Immigrants.md"),
    ("[10] [Council of Elysium_s Office] New Public AFK Stations Important Information.docx", "10_Public_AFK_Stations.md"),
    ("[11] [Elysium Council] Tideward District Construction Progress.docx", "11_Tideward_Construction_Progress.md"),
    ("[12] [Tideward City Hall] Tideward Infrastructure Construction Making Great Progress.docx", "12_Tideward_Infrastructure_Progress.md"),
]

base_path = r"\\?\C:\Users\Alex\Downloads\drive-download-20260601T164557Z-3-001"
output_dir = r"C:\Users\Alex\Assets\ScriptOutputs\grok\Projects\Elysium\lore"

os.makedirs(output_dir, exist_ok=True)

print("Starting extraction of Elysium lore documents...\n")

for filename, output_name in files:
    full_path = os.path.join(base_path, filename)
    output_path = os.path.join(output_dir, output_name)
    
    text = extract_docx_text(full_path)
    
    if text.startswith("ERROR"):
        print(f"FAILED: {output_name}: {text}")
    else:
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(text)
        print(f"Extracted: {output_name} ({len(text)} chars)")

print("\nDone! All documents extracted to the 'lore' folder.")