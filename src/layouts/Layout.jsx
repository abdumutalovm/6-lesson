import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import styled from "@emotion/styled";

function Layout({ children }) {
  const LayoutWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
  `;
  return (
    <LayoutWrapper>
      <LeftSideBar></LeftSideBar>
      {children}
      <RightSideBar></RightSideBar>
    </LayoutWrapper>
  );
}

export default Layout;
