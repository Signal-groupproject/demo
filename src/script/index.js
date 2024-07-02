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

    // 示例：提取该 div 中的所有链接、标题及其对应的时间
    const items = [];
    content.find('a').each((i, elem) => {
      const title = $(elem).text().trim();
      const href = $(elem).attr('href');

      // 查找与当前 <a> 标签相关的 <span> 标签
      const timeElement = $(elem).next('span');
      const time = timeElement.text().trim();

      // 合并数据到一个对象
      items.push({
        title,
        href,
        time
      });
    });

    console.log('提取的内容:');
    console.log(items);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// 调用 fetchData 函数
fetchData();
