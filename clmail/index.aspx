<%@ Page Language="C#" EnableSessionState="False"
EnableViewState="False" Trace="False" Debug="False"%>
<%@ Import Namespace="System.Net.Mail" %>
<%
//public void SendEmail() {

string batch  = "workflow";
if(Request.Form["batch"] != "" && Request.Form["batch"] != null) {
	batch = Request.Form["batch"];
	if(batch == "default" || batch == "defaultdefault")
		batch = "workflow";
	if(batch.IndexOf("default") >= 0)
		batch = batch.Replace("default", "workflow");
	if(Request.Form["type"] != "" && Request.Form["type"] != null && Request.Form["type"] != "cat" && batch.IndexOf(Request.Form["type"]) != 0)
		batch = Request.Form["type"] + batch;
}

string message = Request.Form["message"];
string toname = Request.Form["toname"];
string tomail = Request.Form["toemail"];
string frommail = Request.Form["frommail"];
string edition = Request.Form["edition"];
string editoremail = Request.Form["editoremail"];
string editorcontact = Request.Form["editorcontact"];
string pagename = Request.Form["pagename"];
string title = Request.Form["title"];
string author = Request.Form["author"];
string role = Request.Form["role"];
string host = Request.Form["host"];
string approveurl = Request.Form["approveurl"];
string whoemail = Request.Form["whoemail"];
string comment = Request.Form["comment"];
string CrLf = "\r\n";
MailMessage objMail = new MailMessage();
objMail.From = new MailAddress(frommail);
if(tomail.Length > 0) {
	objMail.To.Add(tomail.Replace(";", ","));
} else {
	objMail.To.Add(editoremail);
}


if (false) {
} else if (batch.EndsWith("norole")) {
	objMail.To.Clear();

	if(editoremail != null) {
		objMail.To.Add(editoremail);
	} else {
		objMail.To.Add(new MailAddress("".Replace("#edition#", edition)));
	}

	string msgtype = Request.Form["msgtype"];
	if(msgtype == null)
		msgtype = batch;
	if(host == null) {
		host = "http";
		if(Request.ServerVariables["HTTPS"].ToLower() == "on")
			host += "s";
		host += "://" + Request.ServerVariables["HTTP_HOST"];
	}
	objMail.Subject = "[CourseLeaf] [NO ROLE] CourseLeaf Review Request: " + role + "";
	objMail.Body = "WARNING:" + CrLf +
		"The user or role " + role + " has not been provisioned when attempting" + CrLf +
		"to email a " + msgtype + " message.  Please contact the user directly," + CrLf +
		"and either provision the user or add a user to the role in the" + CrLf +
		"CourseLeaf administrative console at:" + CrLf +
		"   " + host + "/courseleaf/" + CrLf +
		"" + CrLf + CrLf + comment +
		"" + CrLf + "Thank You." + CrLf + CrLf + "-- CourseLeaf" +
		"" + CrLf +
		"";
	// Instantiate a new instance of SmtpClient
	SmtpClient objSMTP = new SmtpClient();
	// Send the mail message
	objSMTP.Send(objMail);
	Response.Write("Accepted");
} else {
	Response.Write("Rejected: Unknown batch type: " + batch);
}
%>
