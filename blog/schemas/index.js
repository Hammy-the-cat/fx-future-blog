// スキーマタイプをエクスポート
import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import siteStats from './siteStats'
import postStats from './postStats'

export const schemaTypes = [post, author, category, blockContent, siteStats, postStats]