set -e

echo "linking @requestly-ui/resource-table"

npm link ../../requestly-ui/packages/split-pane
npm link ../../requestly-ui/packages/resource-table

cd ../../requestly-ui/packages/resource-table
npm run watch


