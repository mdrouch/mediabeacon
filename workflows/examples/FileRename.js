/**
 * read CSV of asset ids, and files to rename 
 */
var kScriptName = "FileRename"

var renameMap =
{
	'200144007':'mike2.jpg'
};

function rename()
{
	for (var i in renameMap)
	{
		try {
			var assetFile = fileManager.getFileObjectById(i);
			fileManager.fileRename(assetFile, renameMap[i]);	
			logAtLevel("AssetID: " + i + " renamed: " + renameMap[i], kScriptName, logLevels.INFO);
		} catch (theException)
		{
			logAtLevel("ERROR:  " + theException, kScriptName, logLevels.WARNING);
		}
	}
	logAtLevel("Complete", kScriptName,logLevels.INFO);
}

rename();
