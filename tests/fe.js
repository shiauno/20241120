import axios from 'axios'
// 一次引用所有有名字
import * as cheerio from 'cheerio';

(async () => {
  try {
    const { data } = await axios.get('https://wdaweb.github.io/')
    const $ = cheerio.load(data)
    // console.log($('#fe.card-title').text())
    const courses = []
    $('#fe .card-title').each(function () {
      courses.push($(this).text().trim())
    })
    console.log(courses)
  } catch (error) {
    console.log(error)
  }
})()
