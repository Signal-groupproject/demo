const axios = require('axios');

const url = 'https://www.mct.gov.cn/';

async function fetchData() {
  try {
    const { data } = await axios.get(url);

    // 匹配 id="titqh_cont_0" 的 <div> 中的内容
    const regex = /<div[^>]*?\sid="titqh_cont_0"[^>]*?>(.*?)<\/div>/gis;
    const contentMatch = regex.exec(data);

    if (contentMatch && contentMatch.length > 1) {
      const divContent = contentMatch[1];

      // 匹配所有 <li> 元素的正则表达式
      const liRegex = /<li>\s*<a\s+href="([^"]*)"\s+target="_blank"\s+title="([^"]*)"[^>]*>(.*?)<\/a>\s*<span\s+class="list_time_h">([^<]*)<\/span><\/li>/gi;
      let match;
      const items = [];

      // 使用内部正则表达式遍历匹配结果
      while ((match = liRegex.exec(divContent)) !== null) {
        const href = match[1].trim(); // 提取链接
        const title = match[2].trim(); // 提取标题
        const time = match[4].trim(); // 提取时间

        items.push({
          title,
          href,
          time
        });
      }

      console.log('提取的内容:');
      console.log(items);
    } else {
      console.log('没有找到指定的 div.');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
