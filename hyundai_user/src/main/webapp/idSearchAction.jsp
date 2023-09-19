<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import = "hyundai_user.UserDAO"  %>
<%@ page import = "hyundai_user.UserDTO"  %>

<%
	request.setCharacterEncoding("UTF-8");
%> 


<%
		UserDTO userDTO = new UserDAO().idSearch(request.getParameter("user_name"), request.getParameter("user_birth"), request.getParameter("user_hp") );	
%>
		{"아이디":"<%= userDTO.getUser_id() %>","가입일":"<%= userDTO.getGaib_date() %>"}


	
