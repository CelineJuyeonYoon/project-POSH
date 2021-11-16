import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import UploadIcon from "@mui/icons-material/Upload";

export const Wrapper = styled.div`
  width: 390px;
  font-family: "NotoSansKRregular";
  /* height: 748px; */
`;
export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
`;
export const ProfilePicture = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  /* object-fit: cover; */
  /* background-color: #8915a6; */
`;
export const ProfileName = styled.div`
  padding-top: 5px;
  font-size: 13px;
  font-weight: bold;
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
`;
export const Body = styled.div`
  margin-bottom: 84px;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 25px;
`;
export const Menu = styled.span`
  width: 128px;
  height: 42px;
  background-color: #b69acb;
  /* border: 1px solid #ffffff; */
  margin: 1px 1px;
  display: center;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 18px;
`;
export const ProductsWrapper = styled.div`
  width: 390px;
  overflow: auto;
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: row;
  /* margin-left: 16px; */
  /* margin-right: 12px; */
`;
export const ProductsList = styled.div`
  width: 128px;
  height: 128px;
  border: none;
  background-color: #f1f1f1f1;
  margin: 1px 1px;
  cursor: pointer;
`;
export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const FileInput = styled.input`
  display: none;
`;
export const Edit = styled(EditIcon)`
  font-size: 17px;
  color: #ffff;
`;
export const Arrow = styled(UploadIcon)`
  font-size: 17px;
  color: #fff;
`;
export const EditWrapper = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  padding-top: 2px;
  background-color: #b69acb;
  z-index: 1;
  position: absolute;
  bottom: 1px;
  left: 15px;
`;
export const ArrowWrapper = styled.div`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  padding-top: 3px;
  background-color: #b69acb;
  z-index: 1;
  position: absolute;
  bottom: 1px;
  left: 15px;
`;
