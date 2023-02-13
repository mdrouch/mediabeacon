/**
* Get assets without a thumbnail, add to csv
*/
var aUserId=this.user.userId;
var kScriptName = "NoThumbs";
var kReportFolder = "Reports";
var kFilename = "nothumbs.csv";

function select()
{
	logAtLevel("Begin", kScriptName, logLevels.INFO);
	var aSQL = new SQL();
	var aQuery = "select record_id, file_name from editorial where record_id  not in (select record_id from thumbnails) AND file_type2 not in ('ZIP','XML','XMP','Bundle','TXT','Workflow','Perspective','Widget')";
	var results = aSQL.queryForMap(aQuery);
	var aResultFile = fileManager.fileNew(new ManagedFolder(kReportFolder), kFilename).getBufferedWriter();
	aResultFile.writeFullString("record_id,file_name\n");
	for (var i in results)
	{
		aResultFile.writeFullString(results[i].record_id + ",\"" + results[i].file_name + "\"\n");		
	}
	aResultFile.close();
	logAtLevel("End", kScriptName, logLevels.INFO);
}

select();
