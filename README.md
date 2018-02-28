## Vscode

generate list of extensions :<br>
`code --list-extensions > vscode/extensions`

install all extensions :<br>
`while read in; do code --install-extension "$in"; done < vscode/extensions`

## Oh-my-zsh

copy the theme file<br>
`cp oh-my-zsh/blueblueblue.zsh-theme ~/.oh-my-zsh/themes`
