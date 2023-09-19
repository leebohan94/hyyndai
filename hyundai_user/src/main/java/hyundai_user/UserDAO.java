package hyundai_user;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class UserDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;
    
    public UserDAO(){
        try{    
            String URL = "jdbc:mysql://localhost:3306/teamPortfolio";
            String ID  = "root";
            String PW  = "1234";

            Class.forName("com.mysql.jdbc.Driver");
            System.out.println("JDBC Driver 로드성공!");

            conn = DriverManager.getConnection(URL, ID, PW);
            System.out.println("데이터베이스 Connection 연결성공!");
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    
    
    //회원가입
    public int signup(UserDTO userDTO){
        String SQL = "INSERT  INTO  hyundai_user(user_id, user_pw, user_name, user_birth, user_hp, user_addr1, user_addr2, user_agree) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1,  userDTO.getUser_id());
            ps.setString(2,  userDTO.getUser_pw());
            ps.setString(3,  userDTO.getUser_name());
            ps.setString(4, userDTO.getUser_birth());
            ps.setString(5,  userDTO.getUser_hp());
            ps.setString(6,  userDTO.getUser_addr1());
            ps.setString(7,  userDTO.getUser_addr2());
            ps.setString(8, userDTO.getUser_agree());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();

        }
        finally {
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }
        return -1;
      
       
       
    }
    //로그인
    public int signin(String user_id, String user_pw){
        String SQL = "SELECT user_pw FROM hyundai_user WHERE user_id = ?";
        try{
           ps = conn.prepareStatement(SQL);
           ps.setString(1, user_id);
           rs = ps.executeQuery();
           if(rs.next()){
                if(rs.getString(1).equals( user_pw )){
                    return 1;
                }
                else{
                    return 0;
                }
           }
           else{
                return -1;
           }
        }
        catch( Exception e ){
            e.printStackTrace();
        }
        finally {
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }
        return -2;
    }
    //아이디중복확인
    public boolean idCheckMethod(String user_id){
    	boolean result = false; //초기값 중복안된상태
    	
        String SQL = "SELECT user_id  FROM hyundai_user WHERE user_id = ?";

        try{
           PreparedStatement ps = conn.prepareStatement(SQL);	
           ps.setString(1, user_id);
           rs = ps.executeQuery();
           if(rs.next()){
               result=true;  // 중복된 아이디
           }
           else{
        	   result=false; // 사용가능한 아이디
           }
        }
        catch( Exception e ){
            e.printStackTrace();
        }
        finally {
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }
        return result;  // 아이디 중복여부 결과 리턴 boolean 
    }
    
    // 수정 메서드
    public int update(UserDTO userDTO){
        String SQL = "UPDATE hyundai_user SET user_pw = ?, user_name = ?, user_birth = ?, user_hp = ?, user_addr1 = ?, user_addr2 = ?, user_agree = ? WHERE user_id = ? ";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1,  userDTO.getUser_pw());
            ps.setString(2,  userDTO.getUser_name());
            ps.setString(3, userDTO.getUser_birth());
            ps.setString(4,  userDTO.getUser_hp());
            ps.setString(5,  userDTO.getUser_addr1());
            ps.setString(6,  userDTO.getUser_addr2());
            ps.setString(7, userDTO.getUser_agree());
            ps.setString(8,  userDTO.getUser_id());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally {  
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }
        return -1;
    }
    
    //비밀번호 수정(마이페이지 내에서 진행)
    public int pwUpdate(String user_pw, String old_user_pw, String user_id){
        String SQL = "UPDATE hyundai_user SET user_pw = ? WHERE user_pw = ? and user_id=? ";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_pw);
            ps.setString(2, old_user_pw);
            ps.setString(3, user_id);
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally {  
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }
        return -1;
    }
    
    
    
    
    // 개인정보확인하기
    public UserDTO getJoin(String user_id){
        UserDTO userDTO = new UserDTO();

        String SQL = "SELECT * FROM hyundai_user WHERE user_id = ?";

        try{
           ps = conn.prepareStatement(SQL);
           ps.setString(1, user_id);
           rs = ps.executeQuery();

           if(rs.next()){
                userDTO.setUser_id(rs.getString("user_id"));  
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setUser_hp(rs.getString("user_hp"));
                userDTO.setUser_addr1(rs.getString("user_addr1"));
                userDTO.setUser_addr2(rs.getString("user_addr2"));
                userDTO.setUser_agree(rs.getString("user_agree"));
                userDTO.setGaib_date(rs.getString("gaib_date"));
           }
           
        }
        catch( Exception e ){
            e.printStackTrace();
        }
        finally {  
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }

        return userDTO;
    }

    
    // 회원목록
    public  List<UserDTO>  getJoinList(){
        UserDTO userDTO = null;
        List<UserDTO> list = new ArrayList<>();

        String SQL = "SELECT * FROM hyundai_user";

        try{
            ps =conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            while(rs.next()){
                userDTO = new UserDTO();
                userDTO.setUser_id(rs.getString("user_id"));  
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setUser_hp(rs.getString("user_hp"));
                userDTO.setUser_addr1(rs.getString("user_addr1"));
                userDTO.setUser_addr2(rs.getString("user_addr2"));
                userDTO.setUser_agree(rs.getString("user_agree"));
                userDTO.setGaib_date(rs.getString("gaib_date"));
                list.add(userDTO);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally {  
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }
        return list;
    }

    
    
    
    
    // 삭제 메서드
    public int delete(String user_id, String user_pw){
        String SQL = "DELETE FROM hyundai_user  WHERE user_id = ? AND  user_pw = ?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_id);
            ps.setString(2, user_pw);
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally {  
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }
        return -1;
    }
    
    //아이디 찾기 메소드
    public UserDTO idSearch(String user_name, String user_birth, String user_hp){
        String SQL = "SELECT user_id, gaib_date, user_hp, user_name FROM hyundai_user WHERE user_name = ? and user_birth = ? and user_hp = ?";
        try {
            PreparedStatement ps = conn.prepareStatement(SQL);	
            ps.setString(1, user_name);
            ps.setString(2, user_birth);
            ps.setString(3, user_hp);
            rs = ps.executeQuery();
            while(rs.next()) {
                
                if(rs.getString(3).equals(user_hp)&&rs.getString(4).equals(user_name) ){
                	//입력한 핸드폰,생년월일과 db상의 각 값과 같을 경우
                    UserDTO userDTO = new UserDTO();
                    userDTO.setUser_id(rs.getString(1)); //SQL 조회딘 아이디를 반환
                    userDTO.setGaib_date(rs.getString(2)); //SQL 조회딘 아이디를 반환
                    return userDTO;
                }
                
            }
        } catch (Exception e) {
            // TODO: handle exception
        	 e.printStackTrace();
        }
        finally {  
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }
        return null;
    }
    
    // 비밀번호 새비밀번호 재설정 메서드(로그인 창에서)
    public int pwReset(String user_pw, String user_id, String user_hp){
        String SQL = "UPDATE hyundai_user SET user_pw = ? WHERE user_id = ? and user_hp=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, user_pw);
            ps.setString(2, user_id);
            ps.setString(3, user_hp);
            return ps.executeUpdate();  // 1반환
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally {  
            try{
                 if(rs !=null ){rs.close();}
                 if(ps !=null ){ps.close();}
                 if(conn !=null ){conn.close();}
            }
            catch(Exception e){                    
            } 
        }
        return -1;  // -1반환
    }
    
    
}
