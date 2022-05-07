//-----------------------------------------------menu page functionality----------------------------------------------
exports.menu = function(req, res, next){
           
    var user =  req.session.user,
    userId = req.session.userId;
    if(userId == null){
       res.redirect("/login");
       return;
    }
 
    var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
 
    db.query(sql, function(err, results){
       res.render('menu.ejs', {user:user});    
    });       
 };
//--------------------------------render food page--------------------------------
exports.food = function(req, res){

    if (req.session.user) {
        //Select all food category recommendations and print them
        // var rec_ids = []
        var recommendations = []
        var rec_id_to_comments = {}

        execSql("select * from recs WHERE category='food'", null)
        .then(function (recs) {
            // console.log("rec db response")
            var rec_ids = []
            for (var i = 0; i < recs.length; i++) {
                rec_ids[i] = recs[i].id;
            }
            recommendations = recs
            // console.log(rec_ids)
            return rec_ids
        }).then((rec_ids) => {
            // console.log("rec_ids")
            // console.log(rec_ids)
            if (rec_ids.length == 0){
                return [];
            } else {
                return execSql("select * from comments where rec_id in (?)", [rec_ids])
            }
        }).then((comments) => {
             console.log("comments db response")
             console.log(comments)
            rec_id_to_comments = comments.reduce(function (result, comment){
                result[comment.rec_id] = result[comment.rec_id] || [];
                result[comment.rec_id].push(comment);
                return result;
            }, Object.create(null));
            // console.log("map constructed")
            // console.log(rec_id_to_comments)
            return rec_id_to_comments
        }).then((rec_id_to_comments) => {
            console.log("map passed over")
            console.log(rec_id_to_comments)
            for (let rec in recommendations) {
                // console.log(rec_id_to_comments['8'])
                let rec_id = recommendations[rec].id
                console.log(rec_id)
                recommendations[rec].comments = rec_id_to_comments[rec_id.toString()] || [];
            }
            console.log("built recommendations")
            console.log(recommendations)
        }).then((result) => {
            console.log("final recommendations")
            console.log(recommendations)
            res.status(200).render('food', {recs: recommendations})
        })
        
    } else {
        res.status(401).redirect('/login');
    }
 };

 function execSql(statement, values) {
    let p = new Promise(function (res, rej) {
      db.query(statement, values, function (err, result) {
        if (err) rej(err);
        else res(result);
      });
    });
    return p;
  }
 //--------------------------------render museums page--------------------------------
 exports.museums = function(req, res){

    if (req.session.user) {
        //Select all museums category recommendations and print them
        // var rec_ids = []
        var recommendations = []
        var rec_id_to_comments = {}

        execSql("select * from recs WHERE category='museums'", null)
        .then(function (recs) {
            // console.log("rec db response")
            var rec_ids = []
            for (var i = 0; i < recs.length; i++) {
                rec_ids[i] = recs[i].id;
            }
            recommendations = recs
            // console.log(rec_ids)
            return rec_ids
        }).then((rec_ids) => {
            // console.log("rec_ids")
            // console.log(rec_ids)
            if (rec_ids.length == 0){
                return [];
            } else {
                return execSql("select * from comments where rec_id in (?)", [rec_ids])
            }
        }).then((comments) => {
             console.log("comments db response")
             console.log(comments)
            rec_id_to_comments = comments.reduce(function (result, comment){
                result[comment.rec_id] = result[comment.rec_id] || [];
                result[comment.rec_id].push(comment);
                return result;
            }, Object.create(null));
            // console.log("map constructed")
            // console.log(rec_id_to_comments)
            return rec_id_to_comments
        }).then((rec_id_to_comments) => {
            console.log("map passed over")
            console.log(rec_id_to_comments)
            for (let rec in recommendations) {
                // console.log(rec_id_to_comments['8'])
                let rec_id = recommendations[rec].id
                console.log(rec_id)
                recommendations[rec].comments = rec_id_to_comments[rec_id.toString()] || [];
            }
            console.log("built recommendations")
            console.log(recommendations)
        }).then((result) => {
            console.log("final recommendations")
            console.log(recommendations)
            res.status(200).render('museums', {recs: recommendations})
        })
        
    } else {
        res.status(401).redirect('/login');
    }
 };

 function execSql(statement, values) {
    let p = new Promise(function (res, rej) {
      db.query(statement, values, function (err, result) {
        if (err) rej(err);
        else res(result);
      });
    });
    return p;
  }
 //--------------------------------render zoos page--------------------------------
 exports.zoos = function(req, res){

    if (req.session.user) {
        //Select all zoos category recommendations and print them
        // var rec_ids = []
        var recommendations = []
        var rec_id_to_comments = {}

        execSql("select * from recs WHERE category='zoos'", null)
        .then(function (recs) {
            // console.log("rec db response")
            var rec_ids = []
            for (var i = 0; i < recs.length; i++) {
                rec_ids[i] = recs[i].id;
            }
            recommendations = recs
            // console.log(rec_ids)
            return rec_ids
        }).then((rec_ids) => {
            // console.log("rec_ids")
            // console.log(rec_ids)
            if (rec_ids.length == 0){
                return [];
            } else {
                return execSql("select * from comments where rec_id in (?)", [rec_ids])
            }
        }).then((comments) => {
             console.log("comments db response")
             console.log(comments)
            rec_id_to_comments = comments.reduce(function (result, comment){
                result[comment.rec_id] = result[comment.rec_id] || [];
                result[comment.rec_id].push(comment);
                return result;
            }, Object.create(null));
            // console.log("map constructed")
            // console.log(rec_id_to_comments)
            return rec_id_to_comments
        }).then((rec_id_to_comments) => {
            console.log("map passed over")
            console.log(rec_id_to_comments)
            for (let rec in recommendations) {
                // console.log(rec_id_to_comments['8'])
                let rec_id = recommendations[rec].id
                console.log(rec_id)
                recommendations[rec].comments = rec_id_to_comments[rec_id.toString()] || [];
            }
            console.log("built recommendations")
            console.log(recommendations)
        }).then((result) => {
            console.log("final recommendations")
            console.log(recommendations)
            res.status(200).render('zoos', {recs: recommendations})
        })
        
    } else {
        res.status(401).redirect('/login');
    }
 };

 function execSql(statement, values) {
    let p = new Promise(function (res, rej) {
      db.query(statement, values, function (err, result) {
        if (err) rej(err);
        else res(result);
      });
    });
    return p;
  }
  //--------------------------------render parks page--------------------------------
exports.parks = function(req, res){

    if (req.session.user) {
        //Select all parks category recommendations and print them
        // var rec_ids = []
        var recommendations = []
        var rec_id_to_comments = {}

        execSql("select * from recs WHERE category='parks'", null)
        .then(function (recs) {
            // console.log("rec db response")
            var rec_ids = []
            for (var i = 0; i < recs.length; i++) {
                rec_ids[i] = recs[i].id;
            }
            recommendations = recs
            // console.log(rec_ids)
            return rec_ids
        }).then((rec_ids) => {
            // console.log("rec_ids")
            // console.log(rec_ids)
            if (rec_ids.length == 0){
                return [];
            } else {
                return execSql("select * from comments where rec_id in (?)", [rec_ids])
            }
        }).then((comments) => {
             console.log("comments db response")
             console.log(comments)
            rec_id_to_comments = comments.reduce(function (result, comment){
                result[comment.rec_id] = result[comment.rec_id] || [];
                result[comment.rec_id].push(comment);
                return result;
            }, Object.create(null));
            // console.log("map constructed")
            // console.log(rec_id_to_comments)
            return rec_id_to_comments
        }).then((rec_id_to_comments) => {
            console.log("map passed over")
            console.log(rec_id_to_comments)
            for (let rec in recommendations) {
                // console.log(rec_id_to_comments['8'])
                let rec_id = recommendations[rec].id
                console.log(rec_id)
                recommendations[rec].comments = rec_id_to_comments[rec_id.toString()] || [];
            }
            console.log("built recommendations")
            console.log(recommendations)
        }).then((result) => {
            console.log("final recommendations")
            console.log(recommendations)
            res.status(200).render('parks', {recs: recommendations})
        })
        
    } else {
        res.status(401).redirect('/login');
    }
 };

 function execSql(statement, values) {
    let p = new Promise(function (res, rej) {
      db.query(statement, values, function (err, result) {
        if (err) rej(err);
        else res(result);
      });
    });
    return p;
  }

//--------------------------------new rec function--------------------------------
exports.newRec = function(req, res){ 
    message = '';

    if(req.method == "POST"){
        var post  = req.body;
        var rec_title= post.title;
        var text= post.rec_text;
        var cat= post.category;
        let user = req.session.user;
        var today = new Date();
        var date = (today.getMonth()+1) + '-' + today.getDate() + '-' +  today.getFullYear();
        var sql1 = "INSERT INTO `recs`(`title`,`created_at`,`author`,`category`, `rec_text`) VALUES ('" + rec_title + "','" + date + "','" + user.user_name + "','" + cat + "','" + text + "')";
        

        //if local accounts post
        var sql2="SELECT user_name, account_type FROM `users` WHERE `user_name`='"+user.user_name+"' and account_type = 'local'";                           
        db.query(sql2, function(err, results){
            if(results.length){
                var query = db.query(sql1, function(err, result) {   
                    console.log(err) 
                    message = "New recommendation posted successfully.";
                    res.render('newRec.ejs',{message: message});
                });
            } else {
                message = "Only local users can post recommendations.";
                res.render('newRec.ejs',{message: message});
            }
        });
    
 
    } else {
       res.render('newRec');
    }
 };
//-----------------------------------------------map page functionality----------------------------------------------          
exports.map = function(req, res, next){
           
    var user =  req.session.user,
    userId = req.session.userId;
    if(userId == null){
       res.redirect("/login");
       return;
    }
 
    var sql="SELECT * FROM `users` WHERE `id`='"+userId+"'";
 
    db.query(sql, function(err, results){
       res.render('map.ejs', {user:user});    
    });       
 };
//-----------------------------------------------comment functionality----------------------------------------------
exports.comment = function(req, res){ 
    if(req.method == "POST"){
        var body  = req.body;
        var comment_text= body.comment;
        let user = req.session.user;
        let category = body.category; 
        var today = new Date();
        var date = (today.getMonth()+1) + '-' + today.getDate() + '-' +  today.getFullYear();
        var sql = "INSERT INTO `comments`(`comment`,`author`,`rec_id`,`date`) VALUES ('" + comment_text + "','" + user.user_name + "','" + req.params.id + "','" + date + "')";
 
       var query = db.query(sql, function(err, result) {
        let redirect_url = '/menu/' + category
        res.redirect(redirect_url)
       });
 
    } else {
       res.render('menu');
    }
 };
 
