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





<%
	UserDAO userDAO = new UserDAO();
	UserDTO userDTO = userDAO.getJoin( request.getParameter("user_id"));
%>
{"아이디": "<%=userDTO.getUser_id() %>", "이름": "<%=userDTO.getUser_name() %>", "핸드폰": "<%=userDTO.getUser_hp() %>",
"생년월일": "<%=userDTO.getUser_birth() %>", "주소1": "<%=userDTO.getUser_addr1() %>", "주소2": "<%=userDTO.getUser_addr2() %>", 
"약관내용": "<%=userDTO.getUser_agree() %>", "가입일": "<%=userDTO.getGaib_date() %>"}




