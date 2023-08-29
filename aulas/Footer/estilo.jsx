import styled from "styled-components";

export const Container = styled.div`
  /* FOOTER */
  .footer {
    transition: margin 0s;
  }
  .footer {
    background: none repeat scroll 0 0 ${(props) => props.theme.colors.white};
    border-top: 1px solid #e7eaec;
    bottom: 0;
    left: 0;
    padding: 10px 20px;
    position: absolute;
    right: 0;
    font-size: 14px;
  }
  .footer.fixed_full {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 10px 20px;
    background: ${(props) => props.theme.colors.white};
    border-top: 1px solid #e7eaec;
  }
  .footer.fixed {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 10px 20px;
    background: ${(props) => props.theme.colors.white};
    border-top: 1px solid #e7eaec;
    margin-left: 220px;
  }
  main.mini-navbar .footer.fixed,
  main.body-small.mini-navbar .footer.fixed {
    margin: 0 0 0 70px;
  }
  main.mini-navbar.fixed-sidebar .footer.fixed {
    margin: 0;
  }
  main.mini-navbar.canvas-menu .footer.fixed,
  main.canvas-menu .footer.fixed {
    margin: 0 !important;
  }
  main.fixed-sidebar.body-small.mini-navbar .footer.fixed {
    margin: 0 0 0 220px;
  }
  main.body-small .footer.fixed {
    margin-left: 0;
  }

  #scroll-to-top-up {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 1000;
  }
  .scroll-to-top {
    height: 38px;
    width: 38px;
    display: block;
    background: ${(props) => props.theme.colors.primary};
    opacity: 0.8;
    padding: 9px 8px;
    text-align: center;
    color: ${(props) => props.theme.colors.textLight};
    border-radius: 50%;
  }
  .scroll-to-top:focus,
  .scroll-to-top:hover {
    color: ${(props) => props.theme.colors.textLight};
    background: ${(props) => props.theme.colors.primary};
    opacity: 0.7;
    box-shadow: 2px 3px 19px -2px rgba(0, 0, 0, 0.75);
  }
`;
