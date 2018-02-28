# Inspired from hyperzsh
# https://github.com/tylerreckart/hyperzsh

# Personalized prompt
PROMPT='$(_user_host)$(_folder)$(_git_branch_info)'

function _git_branch_info() {
  if [[ -z "$(git_prompt_info)" ]]; then
    echo ""
  else
    echo "$(git_prompt_info) "
  fi
}

function _folder() {
  echo "%{$terminfo[bold]$bg[blue]$fg[white]%}%c%{$reset_color%} "
}

function _user_host() {
  if [[ -n $SSH_CONNECTION ]]; then
    me="⚡︎%n@%m "
  elif [[ $LOGNAME != $USER ]]; then
    me="⚡︎%n "
  else
    me=""
  fi
  if [[ -n $me ]]; then
    echo "%{$fg[grey]%}$me%{$reset_color%}"
  fi
}

ZSH_THEME_GIT_PROMPT_PREFIX="%{$fg[white]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%}"

ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[red]%}✘"
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[green]%}✔︎"
