<?php


function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(
         PDO::ATTR_ERRMODE,
         PDO::ERRMODE_EXCEPTION
      );
   } catch(PDOException $e) {
      die($e->getMessage());
   }
   return $conn;
}


function fetchAll($r) {
   $a = [];
   while($row = $r->fetch(PDO::FETCH_OBJ))
      $a[] = $row;
   return $a;
}


// connection, prepared statement, parameters
function makeQuery($c,$ps,$p,$makeResults=true) {
   try {
      if(count($p)) {
         $stmt = $c->prepare($ps);
         $stmt->execute($p);
      } else {
         $stmt = $c->query($ps);
      }

      $r = $makeResults ? fetchAll($stmt) : [];

      return [
         "result"=>$r
      ];

   } catch(PDOException $e) {
      return [
         "error"=>"Query Failed: ".$e->getMessage()
      ];
   }
}

function makeUpload($file,$folder) {
   $filename = microtime(true) . "_" . $_FILES[$file]['name'];

   if(@move_uploaded_file(
      $_FILES[$file]['tmp_name'],
      $folder.$filename
   )) return ['result'=>$filename];
   else return [
      "error"=>"File Upload Failed",
      "_FILES"=>$_FILES,
      "filename"=>$filename
   ];
}

function makeStatement($data){
	$c = makeConn();
	$t = @$data->type;
	$p = @$data->params;

	switch($t){
		case "users_all":
			return makeQuery($c, "SELECT * FROM track_users",[]);
		case "types_all":
			return makeQuery($c, "SELECT * FROM track_types",[]);
		case "locations_all":
			return makeQuery($c, "SELECT * FROM track_locations",[]);

		case "user_by_id":
        return makeQuery($c,"SELECT * FROM track_users WHERE id = ?",$p);
      	case "type_by_id":
        return makeQuery($c,"SELECT * FROM track_types WHERE id = ?",$p);
      	case "location_by_id":
        return makeQuery($c,"SELECT * FROM track_locations WHERE id = ?",$p);


     	case "types_by_user_id":
        return makeQuery($c,"SELECT * FROM track_types WHERE user_id = ?",$p);
     	case "locations_by_type_id":
        return makeQuery($c,"SELECT * FROM track_locations WHERE type_id = ?",$p);

        case "locations_by_user_id":
        return makeQuery($c,"
        	SELECT * 
        	FROM `track_types` t
        	LEFT JOIN `track_locations` l
        	ON t.id = l.type_id
        	WHERE t.user_id = ?
        ",$p);

        case "check_signin":
        return makeQuery($c,"SELECT * FROM track_users WHERE username = ? AND password = md5(?)",$p);

        case "recent_types":
        return makeQuery($c,"
        	SELECT * 
        	FROM `track_types` t
        	INNER JOIN (
        		SELECT id, type_id, MAX(date_create) as date_create, lat, lng, icon
        		FROM `track_locations`
        		GROUP BY type_id
        		ORDER BY `date_create` DESC
        	) l
        	ON t.id = l.type_id
        	WHERE t.user_id = ?
        	LIMIT 5
        ",$p);

        case "recent_locations":
        return makeQuery($c,"
        	SELECT * 
        	FROM `track_types` t
        	INNER JOIN (
        		SELECT id, type_id, MAX(date_create) as date_create, lat, lng, icon
        		FROM `track_locations`
        		GROUP BY type_id
        		ORDER BY `date_create` DESC
        	) l
        	ON t.id = l.type_id
        	WHERE t.user_id = ?
        ",$p);

        case "latest_location":
        return makeQuery($c,"SELECT MAX(date_create) as last_spot FROM track_locations WHERE type_id = ?",$p);



         /*SEARCH & FILTER*/

        case "search_types":
         $p = ["%$p[0]%",$p[1]];
         return makeQuery($c,"SELECT * FROM
            `track_types`
            WHERE
               `name` LIKE ?
               AND user_id = ?
            ",$p);

        case "type_filter":
           return makeQuery($c,"SELECT * FROM
              `track_types`
              WHERE
                 `$p[0]` = ?
                 AND user_id = ?
              ",[$p[1],$p[2]]);

        //recent-page search
        case "type_search_recent":
           $p = ["%$p[0]%",$p[1]];
           return makeQuery($c,"
              SELECT * 
              FROM `track_types` t
              INNER JOIN (
                SELECT id, type_id, MAX(date_create) as date_create, lat, lng, icon
                FROM `track_locations`
                GROUP BY type_id
                ORDER BY `date_create` DESC
              ) l
              ON t.id = l.type_id
              WHERE 
                 t.name LIKE ?
                 AND t.user_id = ?
              ",$p);


        /* CRUD */

        // INSERT
        case "insert_user":
        	$r = makeQuery($c,"SELECT * FROM `track_users` WHERE `username` = ? OR `email` = ?",[$p[0],$p[1]]);
        	if(count($r['result'])) return ['error'=>"Username or Email already exists"];

        	$r = makeQuery($c, "INSERT INTO 
        		`track_users`
        		(`name`,`username`,`email`,`password`,`phone`,`img`,`occupation`)
        		VALUES
        		('Unknown',?,?,md5(?),'XXXXXXXX','images/user_default.png','Jobless')
        		",$p, false);
        	return ["id"=>$c->lastInsertId()];

	      case "insert_type":
	         $r = makeQuery($c,"INSERT INTO
	            `track_types`
	            (`user_id`,`name`,`category`,`classification`,`img`,`description`,`type_rating`)
	            VALUES
	            (?,?,?,?,'images/type_default.png',?,?)
	            ",$p,false);
	         return ["id"=>$c->lastInsertId()];

        case "insert_location":
         $r = makeQuery($c,"INSERT INTO
            `track_locations`
            (`type_id`,`lat`,`lng`,`usage_rating`,`img`,`icon`,`application`,`font_style`,`note`,`date_create`)
            VALUES
            (?, ?, ?, ?, 'images/location_default.png','images/Location Icon.png',?,?,?, NOW())
            ",$p,false);
         return ["id"=>$c->lastInsertId()];


        // UPDATE

         case "user_onboarding":
         $r = makeQuery($c,"UPDATE
            `track_users`
            SET
               `name` = ?,
               `phone` = ?,
               `occupation` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

         case "update_user":
         $r = makeQuery($c,"UPDATE
            `track_users`
            SET
               `username` = ?,
               `name` = ?,
               `email` = ?,
               `phone` = ?,
               `occupation` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

         case "update_user_image":
         $r = makeQuery($c,"UPDATE
            `track_users`
            SET
               `img` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

         case "update_type":
         $r = makeQuery($c,"UPDATE
            `track_types`
            SET
               `name` = ?,
               `category` = ?,
               `classification` = ?,
               `description` = ?,
               `type_rating` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

         case "update_type_image":
         $r = makeQuery($c,"UPDATE
            `track_types`
            SET
               `img` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

         case "update_location":
         $r = makeQuery($c,"UPDATE
            `track_locations`
            SET
               `usage_rating` = ?,
               `application` = ?,
               `font_style` = ?,
               `note` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

         case "update_location_image":
         $r = makeQuery($c,"UPDATE
            `track_locations`
            SET
               `img` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];



         // DELETE

        case "delete_type":
           return makeQuery($c,"DELETE FROM `track_types` WHERE `id` = ?",$p,false);

        case "delete_location":
           return makeQuery($c,"DELETE FROM `track_locations` WHERE `id` = ?",$p,false);


        default: return ["error"=>"No matched type"];
	}
}


if(!empty($_FILES)) {
   $r = makeUpload("image","../uploads/");
   die(json_encode($r));
}


$data = json_decode(file_get_contents("php://input"));

echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);