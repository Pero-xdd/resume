import { Helmet } from 'react-helmet-async'
import { personalInfo } from '@/data/resume'

export default function SEO() {
  const siteUrl = 'https://lizhenyang.github.io/'

  return (
    <Helmet>
      <title>{`${personalInfo.name} | ${personalInfo.lab} - ${personalInfo.degree}`}</title>
      <meta
        name="description"
        content={`${personalInfo.name}，${personalInfo.university}${personalInfo.degree}，${personalInfo.lab}成员。研究方向为深度图像分割与拓扑保持，拥有腾讯微信事业部及多段服务端开发实习经历。邮箱：${personalInfo.email}`}
      />
      <meta
        name="keywords"
        content={`${personalInfo.name},${personalInfo.social},${personalInfo.university},${personalInfo.lab},计算机技术硕士,深度图像分割,腾讯微信实习,服务端开发,个人简历,求职`}
      />
      <meta name="author" content={personalInfo.name} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="profile" />
      <meta property="og:url" content={siteUrl} />
      <meta
        property="og:title"
        content={`${personalInfo.name} | ${personalInfo.lab} - ${personalInfo.degree}`}
      />
      <meta
        property="og:description"
        content={`${personalInfo.name}，${personalInfo.university}${personalInfo.degree}，${personalInfo.lab}成员。研究方向为深度图像分割与拓扑保持。`}
      />
      <meta property="og:image" content={`${siteUrl}og-image.png`} />
      <meta property="og:locale" content="zh_CN" />
      <meta property="og:site_name" content={`${personalInfo.name}个人简历`} />
      <meta property="profile:first_name" content="振洋" />
      <meta property="profile:last_name" content="李" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${personalInfo.name} | ${personalInfo.lab} - ${personalInfo.degree}`}
      />
      <meta
        name="twitter:description"
        content={`${personalInfo.name}，${personalInfo.university}${personalInfo.degree}，${personalInfo.lab}成员。`}
      />
      <meta name="twitter:image" content={`${siteUrl}og-image.png`} />
    </Helmet>
  )
}
