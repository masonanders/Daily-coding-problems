# Copy these commands into your ~/.bashrc file to enable file generation and testing commands

alias codeproblems='cd ~/Documents/projects/coding-problems/ && clear'

function test() {
  if [[ "$PWD" == "/Users/mason/Documents/projects/coding-problems/daily" || "$PWD" == "/Users/mason/Documents/projects/coding-problems/javascript" ]]; then
    if [[ -z "$1" ]]; then
      echo "must supply a file name to test"
    elif [[ ! -f $1 && ! -f "$1.js" ]]; then
      echo "$1 could not be found"
    else
      clear
      node "test/$1"
    fi
  elif [[ "$PWD" == "/Users/mason/Documents/projects/coding-problems" ]]; then
    echo "must navigate to \"./daily\" or \"./javascript\" to execute this command"
  else
    echo "must navigate to Documents/.../coding-problems to execute this command"
    echo "type 'codeproblems' to jump there now"
  fi
}
# TODO: if run in coding-problems search all folders and run there if found
# TODO: if no argument run on all files

function newproblem() {
  if [[ "$PWD" == "/Users/mason/Documents/projects/coding-problems/daily" || "$PWD" == "/Users/mason/Documents/projects/coding-problems/javascript" ]]; then
    if [[ -z $1 ]]; then
      echo "must supply a file name (function name optional)"
    elif [[ -f $1 || -f "$1.js" ]]; then
      echo "$1 already exists"
    else
      FILENAME=$1
      FUNCTIONNAME=${2:-$FILENAME}
      echo -e "// Description here\n\nfunction $FUNCTIONNAME(/*arguments*/) {\n  // code here\n}\n\n// Time: O(?)\n// Space: O(?)\n\nmodule.exports = $FUNCTIONNAME;" >>"$FILENAME.js"
      echo -e "const UnitTest = require(\"../../test/unit-test\");\nconst $FUNCTIONNAME = require(\"../$FILENAME\");\n\nconst test = new UnitTest($FUNCTIONNAME);\n// test.createTestCase({\n//   output: \"test\",\n//   input: [\"arg1\", \"arg2\"],\n//   description: \"this is an example\"\n// });\n\ntest.runTests();" >>"test/$FILENAME.js"
      echo "created $FILENAME.js and test/$FILENAME.js"
    fi
  elif [[ "$PWD" == "/Users/mason/Documents/projects/coding-problems" ]]; then
    echo "must navigate to \"./daily\" or \"./javascript\" to execute this command"
  else
    echo "must navigate to Documents/.../coding-problems to execute this command"
    echo "type 'codeproblems' to jump there now"
  fi
}
