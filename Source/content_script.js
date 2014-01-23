walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Cloud\b/g, "The Hug");
	v = v.replace(/\bThe cloud\b/g, "The hug");
	v = v.replace(/\bthe Cloud\b/g, "the Hug");
	v = v.replace(/\bthe cloud\b/g, "the hug");
	v = v.replace(/\bCloud\b/g, "Hug");
	
	textNode.nodeValue = v;
}


