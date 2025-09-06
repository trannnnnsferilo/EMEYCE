#!/bin/bash

# Array of original filenames
declare -a files=(
    "Screenshot 2025-09-07 at 05-36-04 Accesorio Español - Accesorio Español.pdf.pdf.png"
    "Screenshot 2025-09-07 at 05-36-11 Accesorio Español - Accesorio Español.pdf.pdf.png"
    "Screenshot 2025-09-07 at 05-36-17 Accesorio Español - Accesorio Español.pdf.pdf.png"
    "Screenshot 2025-09-07 at 05-36-26 Accesorio Español - Accesorio Español.pdf.pdf.png"
    "Screenshot 2025-09-07 at 05-36-40 Accesorio Español - Accesorio Español.pdf.pdf.png"
)

# Array of new filenames
declare -a newnames=(
    "hero-image.png"
    "investigaciones.png"
    "resultados.png"
    "modo-uso.png"
    "gratitude.png"
)

# Copy each file
for i in "${!files[@]}"; do
    if [ -f "${files[$i]}" ]; then
        cp "${files[$i]}" "${newnames[$i]}"
        echo "Copied: ${files[$i]} -> ${newnames[$i]}"
    else
        echo "File not found: ${files[$i]}"
    fi
done
