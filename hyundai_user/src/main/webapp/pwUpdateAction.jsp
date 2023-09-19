<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "hyundai_user.UserDAO" %>

<% 
    request.setCharacterEncoding("UTF-8"); 
%>



<%
        UserDAO userDAO = new UserDAO();
        int result = userDAO.pwUpdate(request.getParameter("user_pw"), request.getParameter("old_user_pw"), request.getParameter("user_id") );
%>

<%=result%>


