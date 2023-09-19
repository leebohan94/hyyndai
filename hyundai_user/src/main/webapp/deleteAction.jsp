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

<jsp:useBean id="userDTO" class="hyundai_user.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />

<%
        UserDAO userDAO = new UserDAO();
        int result = userDAO.delete( userDTO.getUser_id(), userDTO.getUser_pw() );
%>

<%=result%>


