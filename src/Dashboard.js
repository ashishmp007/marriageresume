import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [showSideMenu, setShowSideMenu] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/SignIn");
    }
  }, []);

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/SignIn");
  };

  const handleCreateUser = () => {
    navigate("/CreateUser"); // Navigate to the "Create New User" form
  };

  return (
    <Container>
      <Header>
        <ToggleButton onClick={toggleSideMenu}>SIDE MENU</ToggleButton>
        <SignOutButton onClick={handleSignOut}>Sign Out</SignOutButton>
      </Header>
      <MainContent>
        <SideMenu showSideMenu={showSideMenu}>
          {/* Side menu content goes here */}
        </SideMenu>
        <FeedContainer>
          <CreateButton onClick={handleCreateUser}>Create</CreateButton>
          {[...Array(10).keys()].map((index) => (
            <Card key={index}>
              <h3>Post {index + 1}</h3>
              <p>Content for Post {index + 1} goes here.</p>
            </Card>
          ))}
        </FeedContainer>
      </MainContent>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.header`
  background-color: #3b5998;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
`;

const SideMenu = styled.nav`
  background-color: #eceff5;
  width: ${({ showSideMenu }) => (showSideMenu ? "200px" : "0")};
  overflow-x: hidden;
  transition: width 0.3s ease;
`;

const FeedContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #dddfe2;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 15px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);
`;

const ToggleButton = styled.button`
  background-color: #3b5998;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const SignOutButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const CreateButton = styled.button`
  background-color: #3b5998;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 10px;
`;
