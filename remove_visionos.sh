Adicione o seguinte conteúdo ao script:
#!/bin/bash

find ./node_modules -type f -name '*.podspec' -exec sed -i '' '/visionos/d' {} +

echo "Remoção de propriedades 'visionos' concluída."

