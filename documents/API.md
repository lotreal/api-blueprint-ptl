FORMAT: 1A
HOST: https://api.lttok.com

# Data Structures

## NoteData
+ id: 1 (required, number) - Unique identifier
+ title: Grocery list (required) - Single line description
+ body: Buy milk - Full description of the note which supports Markdown.

## NoteList (array)
+ (NoteData)


# Blog Post [/posts/{id}]
Resource representing **ACME Blog** posts.

+ Attributes
    + id (number)
    + message (string) - The blog post article
    + author: john@appleseed.com (string) - Author of the blog post





# Group 短信服务

## 发送短信验证码 [/sendSmsCode/{id}]

### 获取短信验证码 [GET]

错误代码：

+ 1001,'缺少必要参数'
+ 1002,'短信验证码发送失败'

+ Parameters
    + id (required, string, `13896079999`) ... 手机号码

+ Response 200 (application/json; charset=utf-8)
    + Body

            {}

+ Response 400 (application/json; charset=utf-8)
    + Body

            {
                "error_code":1001,
                "error":"缺少必要参数"
            }



## 验证短信验证码 [/verifySmsCode/{id}]

+ Parameters
    + id (required, string, `13896079999`) ... 手机号码
    + code (required, string, `13896079999`) ... 6位验证码

### 验证短信验证码 [POST]

错误代码：

+ 1001,'缺少必要参数'
+ 1002,'验证码不正确'
+ 1003,'安全码保存失败'

+ Request (application/x-www-form-urlencoded)

    code=445985

+ Response 200 (application/json; charset=utf-8)
    + Body

            {"vCode":"6263a0b46112c4a204fd65e299cdba82"}

+ Response 400 (application/json; charset=utf-8)
    + Body

            {
                "error_code":1001,
                "error":"缺少必要参数"
            }


# Group 账户

## 商户端用户注册 [/user/merchant]

### 商户端用户注册 [PUT]

错误代码：

+ 1001, '安全验证失效'
+ 1002, '缺少必要参数'
+ 1003, '该手机号已注册'
+ 1004, '注册失败：数据更新失败'
+ 1005, '身份证号不正确'

+ Parameters
    + contacter    (required, string, `小王`) ... 联系人
    + contacter_id (required, string, `511223190000001122`) ... 联系人身份证号

+ Request (application/x-www-form-urlencoded)
    contacter=%E5%B0%8F%E7%8E%8B&contacter_id=XX&contacter_id_img=img&license_img=license&merchant_address=chongqing&merchant_name=IBM&mobile=138&password=xxx&vcode=ooo

+ Response 200 (application/json; charset=utf-8)
    + Body

            {"user_id":34}

+ Response 400 (application/json; charset=utf-8)
    + Body

            {
                "error_code":1001,
                "error":"安全验证失效"
            }



# Group 列表
列表说明

## 重要说明

## 获取列表 [/notes]
Note list description

+ Even
+ More
+ Markdown

### 获取列表 [GET]
Get a list of notes.

+ Response 200 (application/json)

    + Headers

            X-Request-ID: f72fc914
            X-Response-Time: 4ms

    + Attributes (NoteList)
