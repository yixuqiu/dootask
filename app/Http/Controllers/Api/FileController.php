<?php

namespace App\Http\Controllers\Api;


use App\Models\File;
use App\Models\User;
use App\Module\Base;
use Request;

/**
 * @apiDefine file
 *
 * 文件
 */
class FileController extends AbstractController
{
    /**
     * 添加项目
     *
     * @apiParam {String} name          项目名称
     * @apiParam {String} type          文件类型
     * @apiParam {Number} [pid]         父级ID
     */
    public function add()
    {
        $user = User::auth();
        // 文件名称
        $name = trim(Request::input('name'));
        $type = trim(Request::input('type'));
        $pid = intval(Request::input('pid'));
        if (mb_strlen($name) < 2) {
            return Base::retError('文件名称不可以少于2个字');
        } elseif (mb_strlen($name) > 32) {
            return Base::retError('文件名称最多只能设置32个字');
        }
        //
        if (!in_array($type, [
            'folder',
            'document',
            'mind',
            'sheet',
            'flow',
        ])) {
            return Base::retError('类型错误');
        }
        //
        if ($pid > 0) {
            if (!File::whereUserid($user->id)->whereId($pid)->exists()) {
                return Base::retError('参数错误');
            }
        }
        // 开始创建
        $file = File::createInstance([
            'pid' => $pid,
            'name' => $name,
            'type' => $type,
            'userid' => $user->userid,
        ]);
        $file->save();
        //
        $data = File::find($file->id);
        return Base::retSuccess('添加成功', $data);
    }
}
