![Screenshot of Hyper](/_screenshots/hyper.png)
![Screenshot of VSCode](/_screenshots/vscode.png)

* [Git](https://github.com/git/git)
* [Zsh/Oh-my-zsh](http://ohmyz.sh/)
* [Hyper](https://hyper.is/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Files

|        | File in this repo | Where to copy it                        |
| ------ | ----------------- | --------------------------------------- |
| Git    | ~/.gitconfig      | ~                                       |
| Git    | ~/.gitignore      | ~                                       |
| Hyper  | ~/.hyper.js       | ~                                       |
| Zsh    | ~/.zshrc          | ~                                       |
| Zsh    | oh-my-zsh/\*      | ~/.oh-my-zsh                            |
| VSCode | vscode/\*         | ~/Library/Application Support/Code/User |

## Vscode Extensions

Install all extensions :<br>
`while read in; do code --install-extension "$in"; done < vscode/extensions`

The list of extensions is generated with :<br>
`code --list-extensions > vscode/extensions`
