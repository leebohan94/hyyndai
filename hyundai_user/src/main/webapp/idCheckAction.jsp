<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "hyundai_user.UserDAO"  %>
<%@ page import = "hyundai_user.UserDTO"  %>

<%
	request.setCharacterEncoding("UTF-8");
%> 

<%		
		UserDAO userDAO = new UserDAO();
		boolean result = userDAO.idCheckMethod( request.getParameter("user_id") );
		out.println( result );
%>
