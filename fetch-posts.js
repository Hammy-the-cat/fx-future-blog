// Node.js script to fetch posts from Sanity
const https = require('https');
const fs = require('fs');

const projectId = 'sfth73fb';
const dataset = 'production';
const apiVersion = '2021-10-21';

const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{
        name,
        image
    },
    mainImage,
    categories[]->{
        title
    },
    publishedAt,
    body
}`;

const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`;

console.log('Fetching posts from Sanity...');
console.log('URL:', url);

https.get(url, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        try {
            const result = JSON.parse(data);
            console.log('\n=== SANITY POSTS ===');
            console.log(JSON.stringify(result, null, 2));
            
            // ファイルに保存
            fs.writeFileSync('posts-data.json', JSON.stringify(result, null, 2));
            console.log('\n✅ Data saved to posts-data.json');
            
            if (result.result && result.result.length > 0) {
                console.log(`\n📝 Found ${result.result.length} post(s):`);
                result.result.forEach((post, index) => {
                    console.log(`${index + 1}. "${post.title || 'No title'}" by ${post.author?.name || 'Unknown'}`);
                });
            } else {
                console.log('\n⚠️  No posts found. Make sure you have created posts in Sanity Studio.');
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
            console.log('Raw response:', data);
        }
    });
}).on('error', (error) => {
    console.error('Error fetching data:', error);
});