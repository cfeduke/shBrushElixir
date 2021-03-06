# Elixir Brush for SyntaxHighlighter

This is an [Elixir](http://elixir-lang.org) syntax brush for 
[SyntaxHighlighter](http://alexgorbatchev.com/SyntaxHighlighter/).

It is probably not complete. 

Trying to setup a fork of the [SyntaxHighlighter project](https://github.com/alexgorbatchev/SyntaxHighlighter) proved 
entirely too time consuming.

Written for SyntaxHighlighter 3.0.83.

# Installation

Simply drop in your `$SYNTAXHIGHLIGHTER_DIR/scripts` directory and make sure to include it in your HTML with the rest of
your brushes.

Alternatively:

    $ cd $SYNTAXHIGHLIGHTER_DIR/scripts
    $ curl -O https://raw.github.com/cfeduke/shBrushElixir/master/shBrushElixir.js


# Usage

Like all brushes, include it in your HTML page similar to:

    <script type="text/javascript" src="/syntaxhighlighter/scripts/shBrushElixir.js"></script>

Then it can be used with one of three aliases:

    <pre class="brush: elixir;">
    <pre class="brush: ex;">
    <pre class="brush: exs;">
