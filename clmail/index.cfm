<cfparam name="batch" default="workflow">
<cfparam name="message" default="">
<cfparam name="toname" default="">
<cfparam name="tomail" default="">
<cfparam name="frommail" default="">
<cfparam name="edition" default="">
<cfparam name="pagename" default="">
<cfparam name="title" default="">
<cfparam name="author" default="">
<cfparam name="role" default="">
<cfparam name="approveurl" default="">
<cfparam name="comment" default="">

<cfif isdefined('form.url')>
	<cfset approveurl=form.url>
</cfif>

<cfif false><cfelse>
Rejected: Unknown batch type
</cfif>
