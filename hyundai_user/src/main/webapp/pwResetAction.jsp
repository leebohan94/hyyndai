<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "hyundai_user.UserDAO"  %>
<%@ page import = "hyundai_user.UserDTO"  %>

<%
	request.setCharacterEncoding("UTF-8");
%> 



<%		
	     int result = new UserDAO().pwReset(request.getParameter("user_pw"), request.getParameter("user_id"), request.getParameter("user_hp"));	
%>



<%=result%>





