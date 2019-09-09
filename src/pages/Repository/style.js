import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-top: 25px;
  }

  h1 {
    margin-top: 15px;
    font-size: 24px;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const ListInssue = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      border: 4px solid #999;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #7159c1;
          }
        }

        span {
          background-color: #eee;
          padding: 3px 4px;
          font-size: 11px;
          color: #333;
          margin-left: 20px;
        }
      }
    }
  }
`;
