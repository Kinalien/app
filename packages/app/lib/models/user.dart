// lib/models/user.dart
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:hive/hive.dart';

part 'user.freezed.dart';
part 'user.g.dart';
part 'user.json.dart';

@HiveType(typeId: 0)
@freezed
class User with _$User {
  const factory User({
    @HiveField(0) String? username,
    @HiveField(1) String? avatarUrl,
  }) = _User;

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);
}

// lib/models/post.dart
import 'package:freezed_annotation/freezed_annotation.dart';
import 'package:hive/hive.dart';

part 'post.freezed.dart';
part 'post.g.dart';
part 'post.json.dart';

@HiveType(typeId: 1)
@freezed
class Post with _$Post {
  const factory Post({
    @HiveField(0) String? postId,
    @HiveField(1) String? content,
  }) = _Post;

  factory Post.fromJson(Map<String, dynamic> json) => _$PostFromJson(json);
}