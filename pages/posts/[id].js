import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../libs/posts'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({postData}) {
  return <Layout>post</Layout>
}