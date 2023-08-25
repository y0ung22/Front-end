import LogoSmall from "../assets/LogoSmall";
import Tag from "../components/Tag";
import MenuBar from "../components/MenuBar";

const PostPage = () => {
  return (
    <div className="PostPage">
      메인 페이지
      {/* 태그예시 */}
      <Tag text="기본" />
      <Tag text="기본" type="disabled" />

      <Post />
      <MenuBar />
    </div>
  );
};

export default PostPage;
