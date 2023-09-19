<%@ 
    page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import = "hyundai_user.UserDAO" %>
<%@ page import = "hyundai_user.UserDTO" %>

<%
request.setCharacterEncoding("UTF-8");
%>

<jsp:useBean id="userDTO" class="hyundai_user.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />
<%
  
        UserDAO userDAO = new UserDAO();
        int result = userDAO.signin( userDTO.getUser_id(), userDTO.getUser_pw() );
        	String name=userDAO.getJoin(userDTO.getUser_id()).getUser_name();
        			
%>
{"아이디":"<%=userDTO.getUser_id()%>","case":<%=result%>}





