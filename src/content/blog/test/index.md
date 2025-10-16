---
title: "我的第一篇测试文章"
description: "这是一篇测试文章，展示如何在博客中使用图片和代码"
publishDate: "2025-01-16"
updatedDate: "2025-01-16"
tags: ["测试", "博客", "Astro", "技术分享"]
draft: false
heroImage: { src: "../../../assets/projects/alex-tyson-2BAXJ7ha74s-unsplash.jpg", alt: "测试文章头图" }
---

# 我的第一篇测试文章

欢迎来到我的个人博客！我是容贤，这是我的第一篇测试文章。

## 关于我

![我的头像](../../../assets/avatar.jpeg)

我目前在南京大学机器人与自动化学院攻读硕士学位，主要研究方向是强化学习和AI代理。

## 我的技能栈

### 编程语言
- Python - 主要用于机器学习和数据分析
- JavaScript/TypeScript - 前端开发
- C++ - 算法实现

### AI/ML 框架

![开发工具](../../../assets/tools/vscode.svg)

我主要使用以下工具和框架：

```python
# 强化学习示例代码
import torch
import gym
import numpy as np

# 创建环境
env = gym.make('CartPole-v1')
state = env.reset()

# 简单的策略网络
class PolicyNetwork(torch.nn.Module):
    def __init__(self, state_dim, action_dim):
        super().__init__()
        self.fc = torch.nn.Linear(state_dim, action_dim)
    
    def forward(self, x):
        return torch.softmax(self.fc(x), dim=-1)

print("强化学习环境初始化完成！")
```

## 项目展示

这里展示一些我正在进行的项目：

![项目示例图](../../../assets/projects/kseniia-zapiatkina-yATU3rg8tNI-unsplash.jpg)

### 主要项目
1. **PDF-Chat** - 基于AI的PDF文档问答系统
2. **RL_SuperMario** - 使用强化学习训练马里奥游戏AI
3. **MineDispatcher** - 矿山调度优化系统

## 开发环境

我的日常开发工具包括：

- **编辑器**: VS Code ![VS Code](../../../assets/tools/vscode.svg)
- **浏览器**: Chrome ![Chrome](../../../assets/tools/chrome.svg)  
- **设计工具**: Figma ![Figma](../../../assets/tools/figma.svg)

## 联系方式

如果你对我的研究或项目感兴趣，欢迎通过以下方式联系我：

![二维码示例](../../../assets/wechat-qrcode.jpg)

- GitHub: [crx16888](https://github.com/crx16888)
- 邮箱: crx16888@gmail.com

## 总结

这篇文章展示了如何在Astro博客中正确引用现有的图片资源。后续我会分享更多关于强化学习、AI开发和技术研究的内容。

![结尾图片](../../../assets/projects/angelica-teran-Bk9hpaXHK4o-unsplash.jpg)

期待与大家交流学习！