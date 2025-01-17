// 졸프 상세 페이지
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
//components
import Footer from "../../../components/Footer";
//image
import backimg from "../../../assets/detail/backimg.svg";
import back from "../../../assets/topbar/back.svg";
import namingtitle from "../../../assets/detail/namingtitle.svg";
import introduceimg from "../../../assets/detail/introduceimg.svg";
import rnrimg from "../../../assets/detail/rnrimg.svg";
import techstackimg from "../../../assets/detail/techstackimg.svg";
import pdtech1 from "../../../assets/detail/pdtech1.svg";
import pdtech2 from "../../../assets/detail/pdtech2.svg";
import btnicon from "../../../assets/detail/btnicon.svg";

const Detail = (props) => {
  const { id } = props;
  const router = useRouter();
  const Routeid = router.query.id;
  //const [id, setId] = useState(id);

  return (
    <>
      <Container>
        <TopBar>
          <Link href="/">
            <Image src={back.src} width={12} height={24} alt="back" />
          </Link>
          <Image
            src={Introducedata[id - 1].titleimg}
            width={300}
            height={100}
            className="titleimg"
            alt="titleimg"
          />
        </TopBar>
        <Slider />
        <div style={{ display: "flex", "flex-direction": "column" }}>
          <Image
            src={introduceimg.src}
            width={358}
            height={38}
            alt="introduceimg"
            className="index"
          />
          <Introoduce>
            <p>{Introducedata[id - 1].oneline}</p>
            <span>{Introducedata[id - 1].detail}</span>
          </Introoduce>
          <Image
            src={rnrimg.src}
            width={358}
            height={38}
            alt="rnrimg"
            className="index"
          />
          <RnR>
            <span className="part-name">{RnRdata[id - 1].data[0].name}</span>
            <div style={{ marginLeft: "25px" }}>
              <p className="mem-name">
                {RnRdata[id - 1].data[0].member[0].name}
              </p>
              <p className="task">{RnRdata[id - 1].data[0].member[0].task}</p>
            </div>
          </RnR>
          <RnR>
            <span className="part-name" style={{ color: "transparent" }}>
              {RnRdata[id - 1].data[0].name}
            </span>
            <div style={{ marginLeft: "25px" }}>
              <p className="mem-name">
                {RnRdata[id - 1].data[0].member[1].name}
              </p>
              <p className="task">{RnRdata[id - 1].data[0].member[1].task}</p>
            </div>
          </RnR>
          <Image
            src={techstackimg.src}
            width={358}
            height={38}
            alt="techstackimg"
            className="index"
          />
          <Tech>
            <p className="part-name">{Techdata[id - 1].data[0].name}</p>
            <Image
              src={Techdata[id - 1].data[0].tech[0].src}
              width={50}
              height={50}
              className="techicon"
              alt="techicon"
            />
            <Image
              src={Techdata[id - 1].data[0].tech[1].src}
              width={50}
              height={50}
              className="techicon"
              alt="techicon"
            />
          </Tech>
        </div>
        <div
          style={{ width: "10%", display: "flex", justifyContent: "center" }}
        >
          <Link href={Introducedata[id - 1].url}>
            <VisitBtn>
              <p>웹사이트 방문하기</p>
              <Image
                src={btnicon.src}
                width={20}
                height={20}
                className="btn"
                alt="btn"
              />
            </VisitBtn>
          </Link>
        </div>

        <img src={backimg.src} className="background" />
      </Container>
      {/* <Footer isAbsolute={false}/> */}
    </>
  );
};

// context는  getStaticPaths에서 넘겨준 값
export const getStaticProps = async (context) => {
  const { id } = context.params;
  return {
    props: {
      id,
    },
  };
};

// getStaticPaths를 사용해 path의 모든 id를 담은 배열을 리턴한다.
export const getStaticPaths = async () => {
  return {
    // 리턴
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
};

const Container = styled.div`
  a {
    width: fit-content;
  }

  overflow-x: hidden;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  .background {
    width: 100%;
    position: absolute;
    z-index: -1000;
  }

  .index {
    margin: 0 auto;
    padding-top: 35px;
    padding-bottom: 15px;
  }

  .part-name {
    width: 70px;
    white-space: nowrap;

    font-family: "Pretendard Variable";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }

  .mem-name {
    margin-bottom: 10px;

    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  .task {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 20px;

    color: #5c5c5c;
  }
`;

const TopBar = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100px;
  padding: 20px;
  background-color: transparent;
  display: flex;
  a {
    padding: 30px 20px;
    position: absolute;
  }

  .titleimg {
    width: 100%;
  }
`;

const Slider = styled.div`
  min-width: 436px;
  min-height: 300px;
  background-color: grey;
`;

const Introoduce = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  p {
    font-family: "Yde street";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 10px;
  }

  span {
    width: 90%;
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.442px;
  }
`;

const RnR = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  position: relative;
`;

const Tech = styled.div`
  width: 90%;
  margin: 0 auto;

  .techicon {
    margin-top: 11px;
    margin-right: 14px;
  }
`;

const VisitBtn = styled.div`
  position: fixed;
  width: 328px;
  height: 50px;
  bottom: 25px;
  /* left: 0; */

  background: #75a483;
  border: 0;
  border-radius: 10px;

  font-family: Urbanist;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;

  .btn {
    margin-left: 5px;
    margin-bottom: 3px;
  }

  filter: drop-shadow(0px 0px 30px rgba(98, 98, 98, 0.24));
`;

//moc data
const Introducedata = [
  {
    id: 1,
    name: "응원이 부적해",
    url: "https://www.instagram.com/likelion_ewha/",
    titleimg: namingtitle,
    oneline: "나만의 사전을 친구들과 함께 채워가요",
    detail: `목숨이 위하여, 눈에 봄바람이다. 인간의 대고, 불어 이상의 목숨이 이 있는가? 속잎나고, 기관과 설산에서 봄바람이다. 청춘의 것이 속에서 눈에 군영과 보이는 있으랴? 뭇 끓는 지혜는 사는가 싹이 풍부하게 않는 그들에게 하여도 것이다. 
    설레는 너의 내는 트고, 새 긴지라 아름다우냐? 우리 대중을 위하여서, 그들의 가진 같으며, 피부가 작고 것이다. 군영과 것은 우리의 이상의 불어 영락과 그리하였는가?`,
  },
  {
    id: 2,
    name: "이름하여 이름하다",
    url: "https://www.instagram.com/likelion_ewha/",
    titleimg: namingtitle,
    oneline: "나만의 사전을 친구들과 함께 채워가요",
    detail: `목숨이 위하여, 눈에 봄바람이다. 인간의 대고, 불어 이상의 목숨이 이 있는가? 속잎나고, 기관과 설산에서 봄바람이다. 청춘의 것이 속에서 눈에 군영과 보이는 있으랴? 뭇 끓는 지혜는 사는가 싹이 풍부하게 않는 그들에게 하여도 것이다. 
        설레는 너의 내는 트고, 새 긴지라 아름다우냐? 우리 대중을 위하여서, 그들의 가진 같으며, 피부가 작고 것이다. 군영과 것은 우리의 이상의 불어 영락과 그리하였는가?`,
  },
];

const RnRdata = [
  {
    id: 1,
    name: "응원이 부적해",
    data: [
      {
        name: "기획 디자인",
        member: [
          {
            name: "박성연",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
          {
            name: "김다은",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
        ],
      },
      {
        name: "프론트엔드",
        member: [
          {
            name: "정연주",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
          {
            name: "이서진",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
        ],
      },
      {
        name: "백엔드",
        member: [
          {
            name: "조현영",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
          {
            name: "최유미",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
          {
            name: "이나경",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "이름하여 이름하다",
    data: [
      {
        name: "기획 디자인",
        member: [
          {
            name: "곽은진",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
          {
            name: "신다윤",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
        ],
      },
      {
        name: "프론트엔드",
        member: [
          {
            name: "김민주",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
          {
            name: "이채원",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
          {
            name: "허윤",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
        ],
      },
      {
        name: "백엔드",
        member: [
          {
            name: "신이수",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
          {
            name: "임채영",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
          {
            name: "김정은",
            task: `맡은 일, 맡은 일, 맡은일, 맡은일, 맡은 일, 맡은 일, 맡은 일, 맡은 일, 맡은 일`,
          },
        ],
      },
    ],
  },
];

const Techdata = [
  {
    id: 1,
    name: "응원이 부적해",
    data: [
      {
        name: "기획 디자인",
        tech: [
          { src: pdtech1, alt: "figma" },
          { src: pdtech2, alt: "Adobe Illustrator" },
        ],
      },
      {
        name: "프론트엔드",
        tech: [
          { src: pdtech1, alt: "figma" },
          { src: pdtech2, alt: "Adobe Illustrator" },
        ],
      },
      {
        name: "백엔드",
        tech: [
          { src: pdtech1, alt: "figma" },
          { src: pdtech2, alt: "Adobe Illustrator" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "이름하여 이름하다",
    data: [
      {
        name: "기획 디자인",
        tech: [
          { src: pdtech1, alt: "figma" },
          { src: pdtech2, alt: "Adobe Illustrator" },
        ],
      },
      {
        name: "프론트엔드",
        tech: [
          { src: pdtech1, alt: "figma" },
          { src: pdtech2, alt: "Adobe Illustrator" },
        ],
      },
      {
        name: "백엔드",
        tech: [
          { src: pdtech1, alt: "figma" },
          { src: pdtech2, alt: "Adobe Illustrator" },
        ],
      },
    ],
  },
];

export default Detail;
