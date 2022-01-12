# NotD-Aftermath-Web
Website for NOTD: Aftermath

## Building release binaries
1. Run the following command in the project folder
```
ng build --configuration production --output-path docs --base-href ./
```
2. Copy the content from NotD-Aftermath-Web/docs into the docs folder at the repository root
3. Make a copy of docs/index.html and name it docs/404.html
4. Commit your changes and push.