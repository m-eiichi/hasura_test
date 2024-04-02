import express from "express";
import postgraphile from "postgraphile"


const app = express();
const PORT = 3000;
// PostgreSQL データベースの接続情報
const connection = 'postgres://postgres_user:postgres_password@db:5432/dvdrental';

app.listen(PORT, function(){
  console.log('Example app listening on port 3000')
})

// PostGraphile ミドルウェアの設定
app.use(
  postgraphile(connection, 'public', {
    watchPg: true, // PostgreSQL スキーマの変更を監視して自動的にスキーマを再ビルド
    graphiql: true, // GraphiQL インタフェースの有効化
    enhanceGraphiql: true, // GraphiQL インタフェースの機能強化
    // その他のオプションをここに追加
  })
);