const axios = require('axios');
const cheerio = require('cheerio');

// 要抓取的网站URL
const url = 'https://www.mct.gov.cn/';

async function fetchData() {
  try {
    // 使用 axios 发送 GET 请求
    const { data } = await axios.get(url);
    // 加载 HTML 数据到 cheerio 中
    const $ = cheerio.load(data);

    // 提取 <div class="list_qh" id="titqh_cont_0" style="display: block;"> 的内容
    const content = $('#titqh_cont_0');

    // 获取该 div 内的文本内容
    const textContent = content.text().trim();

    // 获取该 div 内的HTML内容
    const htmlContent = content.html().trim();;

    // 示例：提取该 div 中的所有链接及其标题
    const links = [];
    content.find('a').each((i, elem) => {
      links.push({
        title: $(elem).text().trim(),
        href: $(elem).attr('href')
      });
    });

    console.log('链接列表:');
    console.log(links);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// 调用 fetchData 函数
fetchData();
