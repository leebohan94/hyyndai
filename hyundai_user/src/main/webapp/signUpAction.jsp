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
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_birth" />
<jsp:setProperty name="userDTO" property="user_hp" />
<jsp:setProperty name="userDTO" property="user_addr1" />
<jsp:setProperty name="userDTO" property="user_addr2" />
<jsp:setProperty name="userDTO" property="user_agree" />


<%
    UserDAO userDAO = new UserDAO();
    int result = userDAO.signup(userDTO);   
    out.println( result );
%>

<%=result%>