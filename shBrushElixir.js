/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		// Contributed by Charles Feduke (based on the Ruby brush).

        // based on vim-elixir/syntax.vim
		var keywords =	'case cond bc lc inlist inbits if unless try loop receive function defmodule defprotocol ' +
                        'defimpl defrecord defrecordp defmacro defmacrop defdelegate defoverridable defexception ' +
                        'exit raise throw after rescue catch else -> use recur quote unquote super alias and not or ' +
                        'when xor in do end fn require import only def';

		var builtins =	'true false __FILE__ __DIR__ __MODULE__ __ENV__ __CALLER__ integer float atom tuple list ' +
                        'binary';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,	css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
			{ regex: /:[a-z][A-Za-z0-9_]*/g,							css: 'color2' },		// atoms
			{ regex: /(\$|@@|@)\w+/g,									css: 'variable bold' },	// $global, @instance, and @@class variables
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keywords
			{ regex: new RegExp(this.getKeywords(builtins), 'gm'),		css: 'color1' }			// builtins
			];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['elixir', 'exs', 'ex'];

	SyntaxHighlighter.brushes.Elixir = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
