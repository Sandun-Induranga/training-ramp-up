import 'package:flutter/material.dart';
import 'package:frontend/ui/home_page/home_page.dart';
import 'package:frontend/ui/theme/theme.dart';

class RampUpApp extends StatelessWidget {
  const RampUpApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'RampUp',
      theme: rampUpTheme(),
      home: const HomepageView(),
    );
  }
}