/**
 * FTP function delivered with initial photo upload workflow
 */
function winscpPut(theManagedFileOrFolder, theFileSeparator)
{
    var aPathSeparatorReplacer = new RegExp(theFileSeparator == '\\' ? '\\/' : '\\\\', 'g');
	var aDestinationPath = theManagedFileOrFolder.path.replace(aPathSeparatorReplacer, theFileSeparator == '\\' ? '\\\\' : '\\/');
	var aDestinationParent = theManagedFileOrFolder.parent.path.replace(aPathSeparatorReplacer, theFileSeparator == '\\' ? '\\\\' : '\\/');

	var aWinSCPPutCommand = new Array();
	aWinSCPPutCommand.push("winscp.exe");
	aWinSCPPutCommand.push("/defaults");
	aWinSCPPutCommand.push("/console");
	aWinSCPPutCommand.push("/command");
	aWinSCPPutCommand.push("\"open\"");
	aWinSCPPutCommand.push("\"option batch continue\"");
	aWinSCPPutCommand.push("\"mkdir \"\"" + aDestinationParent + "\"\"\"");
	aWinSCPPutCommand.push("\"put \"\"" + theManagedFileOrFolder.getAbsolutePath() + "\"\" \"\"" + aDestinationPath + "\"\"\"");
	aWinSCPPutCommand.push("\"exit\"");
	externalAppExecutor.executeCommand(aWinSCPPutCommand);
}