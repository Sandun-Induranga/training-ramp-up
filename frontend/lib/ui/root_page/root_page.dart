import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:frontend/ui/student_home_page/student_home_page_bloc.dart';
import 'package:frontend/ui/sign_in_page/sign_in_page_view.dart';

class RampUpApp extends StatelessWidget {
  const RampUpApp({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final materialApp = MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Ramp Up',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const SignInPageView(),
    );

    return MultiBlocProvider(
      providers: [
        BlocProvider<StudentHomePageBloc>(
          create: (context) => StudentHomePageBloc(context),
        ),
      ],
      child: materialApp,
    );
  }
}
