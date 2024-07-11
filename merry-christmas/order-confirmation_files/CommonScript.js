//The next utils functions for compatibility with Mozilla browsers (Firefox)
//	
function	UniformElementGetById(ownerObject, id)
{
	//if document.getElementById == false - the IE
	return (document.getElementById) ? ownerObject.getElementById(id) : ownerObject.all[id];
}

function	UniformFormGetById(formId)
{
	//if window.document.getElementById(formId).contentDocument == false - the IE

	if(window.document.getElementById(formId).contentDocument)
		return	window.document.getElementById(formId).contentDocument
	else
		return window.document.frames[formId];
}
//////////////////////////